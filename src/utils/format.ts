// src/utils/format.ts
export function formatDate(date: Date) {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(new Date(date))
  }