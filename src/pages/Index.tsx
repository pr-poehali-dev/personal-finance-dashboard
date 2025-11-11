import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "@/components/dashboard/Overview";
import Dashboard from "@/components/dashboard/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950 dark:via-blue-950 dark:to-pink-950">
      <div className="container mx-auto p-6 space-y-8">
        <div className="text-center space-y-2 animate-in fade-in slide-in-from-top duration-700">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 bg-clip-text text-transparent">
            Финансовый Дашборд
          </h1>
          <p className="text-muted-foreground text-lg">
            Управляйте финансами с удовольствием
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full animate-in fade-in slide-in-from-bottom duration-700 delay-150">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              Обзор финансов
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">
              Дашборд
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <Overview />
          </TabsContent>

          <TabsContent value="dashboard" className="mt-6">
            <Dashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
