"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectController_1 = require("../controllers/projectController");
const router = (0, express_1.Router)();
router.get("/", projectController_1.getProjects);
router.post("/", projectController_1.createProject);
router.delete("/:projectId", projectController_1.deleteProject);
exports.default = router;
