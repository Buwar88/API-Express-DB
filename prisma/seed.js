const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });
    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
                  username: 'ajolonauta4',
                  mission: 'Java'
        },
      });
      const woopa5 = await prisma.explorer.upsert({
        where: { name: 'Woopa 5' },
        update: {},
        create: {
          name: 'Woopa 5',
                  username: 'ajolonauta5',
                  mission: 'Node'
        },
      });
      const woopa6 = await prisma.explorer.upsert({
        where: { name: 'Woopa 6' },
        update: {},
        create: {
          name: 'Woopa 6',
                  username: 'ajolonauta6',
                  mission: 'Node'
        },
      });
      const commander1 = await prisma.commander.upsert({
        where: { name: 'Commander 1' },
        update: {},
        create: {
          name: 'Commander 1',
                  lang: 'eng',
                  missionCommander: 'Node',
                  enrollments: 2
        },
      });
      const commander2 = await prisma.commander.upsert({
        where: { name: 'Commander 2' },
        update: {},
        create: {
          name: 'Commander 2',
                  lang: 'spn',
                  missionCommander: 'Java',
                  enrollments: 2
        },
      });

    console.log('Create 5 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();