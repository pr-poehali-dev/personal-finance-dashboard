import { Card } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const expensesByMonth = [
    { month: "Янв", расходы: 35000, доходы: 65000 },
    { month: "Фев", расходы: 42000, доходы: 72000 },
    { month: "Мар", расходы: 38000, доходы: 68000 },
    { month: "Апр", расходы: 45000, доходы: 78000 },
    { month: "Май", расходы: 52000, доходы: 85000 },
    { month: "Июн", расходы: 48000, доходы: 82000 }
  ];

  const categoryData = [
    { name: "Продукты", value: 45000, color: "#a855f7" },
    { name: "Транспорт", value: 15000, color: "#3b82f6" },
    { name: "Развлечения", value: 28000, color: "#ec4899" },
    { name: "Здоровье", value: 12000, color: "#10b981" },
    { name: "Образование", value: 18000, color: "#f59e0b" },
    { name: "Прочее", value: 22000, color: "#6366f1" }
  ];

  const trendData = [
    { day: "Пн", amount: 5200 },
    { day: "Вт", amount: 7800 },
    { day: "Ср", amount: 6500 },
    { day: "Чт", amount: 8900 },
    { day: "Пт", amount: 12000 },
    { day: "Сб", amount: 15000 },
    { day: "Вс", amount: 9500 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-none shadow-lg animate-in fade-in slide-in-from-left duration-700">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Динамика доходов и расходов
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={expensesByMonth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }}
              />
              <Legend />
              <Bar dataKey="расходы" fill="url(#colorExpense)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="доходы" fill="url(#colorIncome)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity={1} />
                  <stop offset="100%" stopColor="#f97316" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.8} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-none shadow-lg animate-in fade-in slide-in-from-right duration-700">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Расходы по категориям
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-none shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-150">
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Тренд расходов за неделю
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="url(#colorTrend)"
              strokeWidth={3}
              dot={{ fill: "#8b5cf6", r: 6 }}
              activeDot={{ r: 8 }}
            />
            <defs>
              <linearGradient id="colorTrend" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#10b981" stopOpacity={1} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={1} />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default Dashboard;
