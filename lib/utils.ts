import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number, decimals: number = 0): string {
  return value.toFixed(decimals);
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getTimeAgo(date: Date): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'online':
    case 'normal':
      return 'text-green-400';
    case 'warning':
      return 'text-yellow-400';
    case 'offline':
    case 'critical':
      return 'text-red-400';
    default:
      return 'text-gray-400';
  }
}

export function getStatusBgColor(status: string): string {
  switch (status) {
    case 'online':
    case 'normal':
      return 'bg-green-500/10';
    case 'warning':
      return 'bg-yellow-500/10';
    case 'offline':
    case 'critical':
      return 'bg-red-500/10';
    default:
      return 'bg-gray-500/10';
  }
}

export function getTemperatureStatus(temp: number): 'normal' | 'warning' | 'critical' {
  if (temp >= 75) return 'critical';
  if (temp >= 60) return 'warning';
  return 'normal';
}
