"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const data_1 = require("../data");
const Task_1 = require("../schemas/Task");
let default_1 = class default_1 {
    fetchTasks() {
        return data_1.tasks;
    }
    getTask(id) {
        return data_1.tasks.find((task) => task.id === id);
    }
    markAsCompleted(taskId) {
        const task = data_1.tasks.find((task) => {
            return task.id === taskId;
        });
        if (!task) {
            throw new Error(`Couldn't find the task with id ${taskId}`);
        }
        if (task.completed === true) {
            throw new Error(`Task with id ${taskId} is already completed`);
        }
        task.completed = true;
        return task;
    }
    project(taskData) {
        return data_1.projects.find((project) => {
            return project.id === taskData.project_id;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => [Task_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], default_1.prototype, "fetchTasks", null);
__decorate([
    (0, type_graphql_1.Query)((returns) => Task_1.default, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], default_1.prototype, "getTask", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => Task_1.default),
    __param(0, (0, type_graphql_1.Arg)("taskId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], default_1.prototype, "markAsCompleted", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], default_1.prototype, "project", null);
default_1 = __decorate([
    (0, type_graphql_1.Resolver)((of) => Task_1.default)
], default_1);
exports.default = default_1;
//# sourceMappingURL=TaskResolver.js.map