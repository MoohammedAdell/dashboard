import React from "react";
import { CheckCircle2, Circle, Check } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const tasksData = [
  {
    id: 1,
    title: "Design new dashboard UI",
    date: "May 31, 2024",
    status: "completed",
    priority: "High",
  },
  {
    id: 2,
    title: "Fix user authentication bug",
    date: "May 30, 2024",
    status: "completed",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Update documentation",
    date: "May 29, 2024",
    status: "pending",
    priority: "Low",
  },
  {
    id: 4,
    title: "Add new analytics page",
    date: "May 28, 2024",
    status: "pending",
    priority: "High",
  },
  {
    id: 5,
    title: "Optimize database queries",
    date: "May 27, 2024",
    status: "pending",
    priority: "Medium",
  },
];

const priorityStyles = {
  High: {
    dark: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    light: "bg-purple-50 text-purple-600 border-purple-200",
  },
  Medium: {
    dark: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    light: "bg-amber-50 text-amber-600 border-amber-200",
  },
  Low: {
    dark: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    light: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
};

export function RecentTasks() {
  const { isDark } = useTheme();

  return (
    <div
      className={`border rounded-2xl p-5 sm:p-6 h-full flex flex-col justify-between transition-all duration-200 ${
        isDark
          ? "bg-slate-900 border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.2)] text-white"
          : "bg-white border-[#E2E8F0] shadow-[0_10px_30px_rgba(15,23,42,0.04)] text-[#0F172A]"
      }`}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold tracking-tight">Recent Tasks</h3>
        <button className="text-xs font-semibold text-blue-500 hover:text-blue-600 transition-colors">
          View all
        </button>
      </div>

      {/* Tasks List مع flex-1 وزيادة المسافات لتوزيع الطول بالتساوي */}
      <div className="flex-1 flex flex-col justify-around my-2">
        {tasksData.map((task) => {
          const isCompleted = task.status === "completed";
          const priority = priorityStyles[task.priority][isDark ? "dark" : "light"];

          return (
            <div
              key={task.id}
              className={`flex items-center justify-between py-2.5 border-b last:border-0 ${
                isDark ? "border-slate-800/60" : "border-slate-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <button className="shrink-0 transition-transform active:scale-95">
                  {isCompleted ? (
                    <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30">
                      <Check size={13} strokeWidth={3} />
                    </div>
                  ) : (
                    <Circle
                      size={20}
                      className={isDark ? "text-slate-600 hover:text-slate-400" : "text-slate-300 hover:text-slate-400"}
                    />
                  )}
                </button>
                <div>
                  <p
                    className={`text-sm font-medium leading-tight ${
                      isCompleted
                        ? "line-through text-slate-400"
                        : isDark
                        ? "text-slate-200"
                        : "text-[#0F172A]"
                    }`}
                  >
                    {task.title}
                  </p>
                  <span className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                    {task.date}
                  </span>
                </div>
              </div>

              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${priority}`}>
                {task.priority}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}