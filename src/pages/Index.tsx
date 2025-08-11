import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [searchTerm, setSearchTerm] = useState('');

  const analyticsData = [
    { name: 'Активные участники', value: 234, change: '+12%', color: 'bg-club-orange' },
    { name: 'Проведено практик', value: 89, change: '+8%', color: 'bg-club-teal' },
    { name: 'Средняя посещаемость', value: '87%', change: '+5%', color: 'bg-club-blue' },
    { name: 'Доход за месяц', value: '₽125,000', change: '+23%', color: 'bg-primary' }
  ];

  const practices = [
    { id: 1, title: 'Медитация осознанности', category: 'Медитация', duration: '30 мин', participants: 45 },
    { id: 2, title: 'Йога для начинающих', category: 'Йога', duration: '60 мин', participants: 32 },
    { id: 3, title: 'Дыхательные техники', category: 'Дыхание', duration: '45 мин', participants: 28 },
    { id: 4, title: 'Звуковая терапия', category: 'Релаксация', duration: '90 мин', participants: 18 }
  ];

  const pricingPlans = [
    { id: 'basic', name: 'Базовый', price: '₽5,000', period: '/мес', features: ['До 50 участников', 'Базовая аналитика', 'Email поддержка'] },
    { id: 'pro', name: 'Профессиональный', price: '₽12,000', period: '/мес', features: ['До 200 участников', 'Расширенная аналитика', 'Приоритетная поддержка', 'Персональный менеджер'] },
    { id: 'enterprise', name: 'Корпоративный', price: '₽25,000', period: '/мес', features: ['Неограниченно участников', 'Полная аналитика', '24/7 поддержка', 'Кастомизация', 'API доступ'] }
  ];

  const filteredPractices = practices.filter(practice => 
    practice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    practice.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-club-gray via-white to-club-gray/50">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 py-8 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-club-orange to-club-teal bg-clip-text text-transparent">
            Управление Клубом
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Современная платформа для управления участниками, мероприятиями и аналитикой вашего клуба
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-sm">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-club-orange data-[state=active]:text-white">
              <Icon name="BarChart3" className="w-4 h-4 mr-2" />
              Дашборд
            </TabsTrigger>
            <TabsTrigger value="pricing" className="data-[state=active]:bg-club-orange data-[state=active]:text-white">
              <Icon name="CreditCard" className="w-4 h-4 mr-2" />
              Тарифы
            </TabsTrigger>
            <TabsTrigger value="practices" className="data-[state=active]:bg-club-orange data-[state=active]:text-white">
              <Icon name="Book" className="w-4 h-4 mr-2" />
              Практики
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-club-orange data-[state=active]:text-white">
              <Icon name="Calendar" className="w-4 h-4 mr-2" />
              События
            </TabsTrigger>
            <TabsTrigger value="support" className="data-[state=active]:bg-club-orange data-[state=active]:text-white">
              <Icon name="MessageSquare" className="w-4 h-4 mr-2" />
              Поддержка
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {analyticsData.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-scale-in border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                        <Badge variant="secondary" className={`${item.color} text-white`}>
                          {item.change}
                        </Badge>
                      </div>
                      <div className={`w-12 h-12 rounded-full ${item.color} opacity-20`}></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Activity Chart */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="w-5 h-5 text-club-orange" />
                  Активность участников
                </CardTitle>
                <CardDescription>Статистика посещаемости за последние 7 дней</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'].map((day, index) => (
                    <div key={day} className="flex items-center gap-4">
                      <div className="w-20 text-sm font-medium">{day}</div>
                      <Progress value={Math.random() * 100} className="flex-1" />
                      <div className="text-sm text-gray-500 w-12">{Math.floor(Math.random() * 50 + 50)}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Выберите подходящий тариф</h2>
              <p className="text-gray-600">Гибкие планы для клубов любого размера</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`relative cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                    selectedPlan === plan.id ? 'border-club-orange scale-105' : 'border-gray-200 hover:border-club-teal'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.id === 'pro' && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-club-orange text-white">
                      Популярный
                    </Badge>
                  )}
                  <CardHeader className="text-center space-y-4">
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-club-blue">
                        {plan.price}
                        <span className="text-sm font-normal text-gray-500">{plan.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Icon name="Check" className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${selectedPlan === plan.id ? 'bg-club-orange hover:bg-club-orange/90' : 'bg-club-teal hover:bg-club-teal/90'} text-white`}
                    >
                      {selectedPlan === plan.id ? 'Выбрано' : 'Выбрать план'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-club-orange/20 bg-gradient-to-r from-club-orange/5 to-club-teal/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-club-blue">Готовы начать?</h3>
                    <p className="text-gray-600">Выберите план и начните управлять своим клубом уже сегодня</p>
                  </div>
                  <Button size="lg" className="bg-gradient-to-r from-club-orange to-club-teal text-white hover:opacity-90">
                    Оплатить {pricingPlans.find(p => p.id === selectedPlan)?.price}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Practices Tab */}
          <TabsContent value="practices" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Каталог практик</h2>
              <div className="relative w-full sm:w-auto">
                <Icon name="Search" className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Поиск практик..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-80"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPractices.map((practice) => (
                <Card key={practice.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg font-semibold">{practice.title}</CardTitle>
                        <Badge variant="secondary" className="bg-club-teal/10 text-club-teal">
                          {practice.category}
                        </Badge>
                      </div>
                      <Icon name="BookOpen" className="w-6 h-6 text-club-orange" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" className="w-4 h-4" />
                        {practice.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Users" className="w-4 h-4" />
                        {practice.participants} участников
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-club-orange text-club-orange hover:bg-club-orange hover:text-white">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPractices.length === 0 && (
              <Card className="p-12 text-center border-2 border-dashed border-gray-200">
                <Icon name="Search" className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">Практики не найдены</h3>
                <p className="text-gray-500">Попробуйте изменить поисковый запрос</p>
              </Card>
            )}
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="text-center space-y-4">
              <Icon name="Calendar" className="w-16 h-16 text-club-orange mx-auto" />
              <h2 className="text-2xl font-bold text-gray-900">Управление мероприятиями</h2>
              <p className="text-gray-600">Создавайте и управляйте событиями вашего клуба</p>
              <Button className="bg-club-orange hover:bg-club-orange/90 text-white">
                <Icon name="Plus" className="w-4 h-4 mr-2" />
                Создать событие
              </Button>
            </div>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageSquare" className="w-5 h-5 text-club-teal" />
                    Чат поддержки
                  </CardTitle>
                  <CardDescription>Получите помощь от наших экспертов</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-club-teal hover:bg-club-teal/90 text-white">
                    Начать чат
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Book" className="w-5 h-5 text-club-blue" />
                    База знаний
                  </CardTitle>
                  <CardDescription>Найдите ответы на часто задаваемые вопросы</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-club-blue text-club-blue hover:bg-club-blue hover:text-white">
                    Открыть справку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;