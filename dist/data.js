"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks = exports.projects = void 0;
exports.projects = [
    { id: 1, name: "Learn React Native" },
    { id: 2, name: "Workout" },
];
exports.tasks = [
    { id: 1, title: "Install Node", completed: true, project_id: 1 },
    {
        id: 2,
        title: "Install React Native CLI:",
        completed: false,
        project_id: 1,
    },
    { id: 3, title: "Install Xcode", completed: false, project_id: 1 },
    { id: 4, title: "Morning Jog", completed: true, project_id: 2 },
    { id: 5, title: "Visit the gym", completed: false, project_id: 2 },
];
//# sourceMappingURL=data.js.map