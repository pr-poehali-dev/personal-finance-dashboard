import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";

const Overview = () => {
  const stats = [
    {
      title: "Общий баланс",
      value: "1 245 000 ₽",
      change: "+12.5%",
      icon: "Wallet",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Доходы",
      value: "850 000 ₽",
      change: "+8.2%",
      icon: "TrendingUp",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Расходы",
      value: "425 000 ₽",
      change: "-3.1%",
      icon: "TrendingDown",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Инвестиции",
      value: "320 000 ₽",
      change: "+15.8%",
      icon: "LineChart",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const budgets = [
    { category: "Продукты", spent: 45000, limit: 50000, color: "bg-purple-500" },
    { category: "Транспорт", spent: 15000, limit: 20000, color: "bg-blue-500" },
    { category: "Развлечения", spent: 28000, limit: 30000, color: "bg-pink-500" },
    { category: "Здоровье", spent: 12000, limit: 25000, color: "bg-green-500" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card
            key={stat.title}
            className="p-6 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                <Icon name={stat.icon} className="text-white" size={24} />
              </div>
              <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm text-muted-foreground mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {stat.value}
            </p>
          </Card>
        ))}
      </div>

      <Card className="p-6 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-none shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-300">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Бюджеты по категориям
        </h2>
        <div className="space-y-6">
          {budgets.map((budget, index) => {
            const percentage = (budget.spent / budget.limit) * 100;
            return (
              <div
                key={budget.category}
                className="space-y-2 animate-in fade-in slide-in-from-left"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{budget.category}</span>
                  <span className="text-sm text-muted-foreground">
                    {budget.spent.toLocaleString()} ₽ / {budget.limit.toLocaleString()} ₽
                  </span>
                </div>
                <Progress value={percentage} className="h-3" indicatorClassName={budget.color} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{percentage.toFixed(1)}% использовано</span>
                  <span>Осталось: {(budget.limit - budget.spent).toLocaleString()} ₽</span>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Overview;
