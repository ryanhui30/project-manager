import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("Attempting to fetch projects from the database..."); // Debug: Confirm database query is being attempted
    const projects = await prisma.project.findMany();
    console.log("Projects retrieved successfully:", projects); // Debug: Log the retrieved data

    res.json(projects);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving projects: ${error.message}` });
  }
};
