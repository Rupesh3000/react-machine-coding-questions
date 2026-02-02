import AutocompleteSearch from "./AutocompleteSearch/AutocompleteSearch.jsx";
import Todo from "./To-Do List/Todo.jsx";

export const projectMetaData = [
  {
    id: "advanced-todo",
    title: "Advanced Todo List",
    description:
      "Interview-grade Todo app with edit, filters, completion toggle, and localStorage persistence. Focused on clean state design, immutability, and render optimization.",
    component: Todo,
  },
  {
    id: "autocomplete-search",
    title: "Autocomplete Search",
    description:
      "High-frequency interview problem implementing debounced search, request race-condition handling, in-memory caching, and full keyboard navigation (↑ ↓ Enter Esc). Focused on async control and performance.",
    component: AutocompleteSearch,
  },
];
