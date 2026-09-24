import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'dayone.app.v1';
const blankState = { profile: null, projects: [], activeProjectId: null, savedPaths: [] };
const AppContext = createContext(null);

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsed && typeof parsed === 'object') {
      return {
        profile: parsed.profile || null,
        projects: Array.isArray(parsed.projects) ? parsed.projects : [],
        activeProjectId: parsed.activeProjectId || null,
        savedPaths: Array.isArray(parsed.savedPaths) ? parsed.savedPaths : [],
      };
    }
  } catch { /* Storage can be disabled; the app will still work for this visit. */ }
  return blankState;
}

export function AppProvider({ children }) {
  const [state, setState] = useState(loadState);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* Full or blocked storage should not break the UI. */ }
  }, [state]);

  const actions = useMemo(() => ({
    saveProfile(profile) {
      setState((current) => ({ ...current, profile }));
    },
    startProject(path, selectedStage = 'direction') {
      setState((current) => {
        const existing = !path.custom && current.projects.find((project) => project.pathId === path.id);
        if (existing) return { ...current, activeProjectId: existing.id };
        const id = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
        const project = {
          id, pathId: path.id, customPath: path.custom ? path : null,
          title: path.title, createdAt: new Date().toISOString(),
          selectedStage, done: {}, notes: {}, drafts: {},
        };
        return { ...current, projects: [...current.projects, project], activeProjectId: id };
      });
    },
    setActiveProject(id) {
      setState((current) => ({ ...current, activeProjectId: id }));
    },
    setSelectedStage(id, stage) {
      setState((current) => ({ ...current, projects: current.projects.map((project) => project.id === id ? { ...project, selectedStage: stage } : project) }));
    },
    toggleTask(id, taskId) {
      setState((current) => ({ ...current, projects: current.projects.map((project) => project.id === id ? { ...project, done: { ...project.done, [taskId]: !project.done?.[taskId] } } : project) }));
    },
    saveNote(id, taskId, text) {
      setState((current) => ({ ...current, projects: current.projects.map((project) => project.id === id ? { ...project, notes: { ...project.notes, [taskId]: text } } : project) }));
    },
    saveDraft(id, fieldId, text) {
      setState((current) => ({ ...current, projects: current.projects.map((project) => project.id === id ? { ...project, drafts: { ...project.drafts, [fieldId]: text } } : project) }));
    },
    updateCustomIdea(id, path) {
      setState((current) => ({ ...current, projects: current.projects.map((project) => project.id === id && project.customPath ? { ...project, customPath: path, title: path.title } : project) }));
    },
    toggleSaved(id) {
      setState((current) => ({ ...current, savedPaths: current.savedPaths.includes(id) ? current.savedPaths.filter((item) => item !== id) : [...current.savedPaths, id] }));
    },
    removeProject(id) {
      setState((current) => {
        const projects = current.projects.filter((project) => project.id !== id);
        return { ...current, projects, activeProjectId: current.activeProjectId === id ? projects.at(-1)?.id || null : current.activeProjectId };
      });
    },
  }), []);

  return <AppContext.Provider value={{ ...state, ...actions }}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used inside AppProvider');
  return context;
}
