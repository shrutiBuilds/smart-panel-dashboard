export interface Panel {
  panelId: string;
  panelName: string;
  panelLocation: string;
  panelType: 'LT' | 'HT' | 'PCC' | 'MCC' | 'APFC' | 'Distribution';
  status: 'online' | 'offline' | 'maintenance';
  createdAt: Date;
}

export interface TemperatureReading {
  readingId: string;
  panelId: string;
  sensorName: string;
  temperature: number;
  humidity: number;
  heatIndex: number;
  status: 'normal' | 'warning' | 'critical';
  readingTime: Date;
}

export interface PowerReading {
  powerReadingId: string;
  panelId: string;
  voltage: number;
  current: number;
  frequency: number;
  powerFactor: number;
  energyConsumption: number;
  readingTime: Date;
}

export interface AlarmLog {
  alarmId: string;
  panelId: string;
  alarmType: string;
  severity: 'normal' | 'warning' | 'critical' | 'emergency';
  description: string;
  status: 'active' | 'acknowledged' | 'resolved';
  createdAt: Date;
  acknowledgedBy?: string;
}

export interface User {
  userId: string;
  name: string;
  email: string;
  role: 'admin' | 'operator' | 'viewer';
}

export interface KPICard {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  icon: React.ReactNode;
  trend?: number;
  status: 'normal' | 'warning' | 'critical';
  color: string;
}

export interface Alert {
  id: string;
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'critical';
  timestamp: Date;
  read: boolean;
}

export interface ChartData {
  time: string;
  temperature: number;
  power: number;
  cooling: number;
  energy: number;
}

export interface RecentEvent {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  type: 'status' | 'alert' | 'action' | 'maintenance';
}

export interface SensorData {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'online' | 'offline' | 'warning';
  lastUpdate: Date;
}
