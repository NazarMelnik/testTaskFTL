export default function objCreator(data) {
  if (data) {
    const statusStats = {};
    const assigneeStats = {};
    const dueDateStats = {};

    data.forEach((el) => {
      if (el.hasOwnProperty("status")) {
        const status = el.status;

        if (statusStats[status]) {
          statusStats[status]++;
        } else {
          statusStats[status] = 1;
        }
      }
      if (el.hasOwnProperty("dueDate")) {
        const dataStr = el.dueDate;

        const targetDate = new Date(eval(dataStr));
        const currentDate = new Date();
        const timeDiff = targetDate - currentDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24) / -7);
        const weeksKey = `${daysDiff}Weeks`;
        if (dueDateStats[weeksKey]) {
          dueDateStats[weeksKey]++;
        } else {
          dueDateStats[weeksKey] = 1;
        }
      }
      if (el.hasOwnProperty("assignee")) {
        const assignee = el.assignee;

        if (assigneeStats[assignee]) {
          assigneeStats[assignee]++;
        } else {
          assigneeStats[assignee] = 1;
        }
      }
    });
    console.log({
      taskStatus: statusStats,
      assigneeStats: assigneeStats,
      dueDateStats: dueDateStats,
    });
    return {
      taskStatus: statusStats,
      assigneeStats: assigneeStats,
      dueDateStats: dueDateStats,
    };
  }
}
