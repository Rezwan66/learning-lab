import { RequestHandler } from 'express';
import { prisma } from '../../lib/prisma';

const createUsageLog: RequestHandler = async (req, res) => {
  console.log(req.user);
  try {
    const payload = req.body;
    const log = await prisma.usageLog.create({
      data: { ...payload, userId: req.user.id },
    });

    res.status(201).send({ message: 'Log Added', data: log });
  } catch (error) {
    res.status(500).json({ message: 'Log creation error', error });
  }
};

const getUsageLogs: RequestHandler = async (req, res) => {
  try {
    const log = await prisma.usageLog.findMany({
      include: { user: true, equipment: true },
    });

    res.status(200).send({ message: 'Logs Retrieved', data: log });
  } catch (error) {
    res.status(500).json({ message: 'Log retrieval error', error });
  }
};

const updateUsageLog: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.send('Please provide ID');
  try {
    const log = await prisma.usageLog.update({
      where: { id },
      data: {
        endTime: new Date(),
      },
    });

    res.send({ message: 'Updated log', data: log });
  } catch (error) {
    res.send({ message: 'Error updating log', error });
  }
};

export const logController = { createUsageLog, getUsageLogs, updateUsageLog };
