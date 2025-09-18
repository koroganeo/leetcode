class TaskManager {
  private tasks: number[][] = [];

  constructor(tasks: number[][]) {
    this.tasks = tasks;
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks.sort(([, taskId1, priority1], [, taskId2, priority2]) => {
      return priority1 === priority2
        ? taskId1 - taskId2
        : priority1 - priority2;
    });
  }

  add(userId: number, taskId: number, priority: number): void {
    if (this.tasks.some(([, id]) => id === taskId)) return;
    this.tasks.push([userId, taskId, priority]);
    this.sortTasks();
  }

  edit(taskId: number, newPriority: number): void {
    const task = this.tasks.find(([, id]) => id === taskId);
    if (!task) return;
    task[2] = newPriority;
    this.sortTasks();
  }

  rmv(taskId: number): void {
    const index = this.tasks.findIndex(([, id]) => id === taskId);
    if (index === -1) return;
    this.tasks.splice(index, 1);
  }

  execTop(): number {
    const [userId, ,] = this.tasks.pop() || [];
    return userId ?? -1;
  }
}
