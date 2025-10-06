import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const performanceData = [
  { name: 'Jan', projects: 12, satisfaction: 98 },
  { name: 'Feb', projects: 19, satisfaction: 96 },
  { name: 'Mar', projects: 25, satisfaction: 99 },
  { name: 'Apr', projects: 31, satisfaction: 97 },
  { name: 'May', projects: 28, satisfaction: 98 },
  { name: 'Jun', projects: 35, satisfaction: 99 },
];

const servicesData = [
  { name: 'Web Development', value: 35, color: '#1a3254' },
  { name: 'Hosting', value: 25, color: '#d3d4d8' },
  { name: 'Marketing', value: 20, color: '#4a5568' },
  { name: 'AI Solutions', value: 15, color: '#2d3748' },
  { name: 'Others', value: 5, color: '#718096' },
];

const growthData = [
  { year: '2020', revenue: 100, clients: 50 },
  { year: '2021', revenue: 180, clients: 95 },
  { year: '2022', revenue: 280, clients: 160 },
  { year: '2023', revenue: 420, clients: 280 },
  { year: '2024', revenue: 650, clients: 450 },
];

export function EffectivenessCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
      {/* Project Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="projects" fill="#1a3254" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Service Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Service Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={servicesData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {servicesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Growth Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Growth Over Years</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="year" />
              <YAxis />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#1a3254" 
                strokeWidth={3}
                dot={{ fill: '#1a3254', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="clients" 
                stroke="#d3d4d8" 
                strokeWidth={3}
                dot={{ fill: '#d3d4d8', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Satisfaction Rate */}
      <Card>
        <CardHeader>
          <CardTitle>Client Satisfaction</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="name" />
              <YAxis domain={[95, 100]} />
              <Line 
                type="monotone" 
                dataKey="satisfaction" 
                stroke="#1a3254" 
                strokeWidth={3}
                dot={{ fill: '#1a3254', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}