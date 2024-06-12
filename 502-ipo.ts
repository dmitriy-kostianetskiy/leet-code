import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

namespace Problem502 {
  type Project = {
    profit: number;
    capital: number;
  };

  function findMaximizedCapital(
    k: number,
    w: number,
    profits: number[],
    capital: number[],
  ): number {
    const projects: Project[] = profits.map((profit, index) => ({
      profit,
      capital: capital[index],
    }));

    projects.sort((a, b) => a.capital - b.capital);

    const queue = new MaxPriorityQueue();

    let projectIndex = 0;

    for (let i = 0; i < k; i++) {
      while (projectIndex < projects.length && projects[projectIndex].capital <= w) {
        const project = projects[projectIndex];

        queue.enqueue(project, project.profit);
        projectIndex++;
      }

      if (queue.isEmpty()) {
        break;
      }

      const { element } = queue.dequeue();
      const project = element as Project;

      w += project.profit;
    }

    return w;
  }

  console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]));
}
