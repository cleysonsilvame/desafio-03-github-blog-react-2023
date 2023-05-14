import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBR from 'date-fns/locale/pt-BR'

export const formatDateWithSuffix = (rawDate: string | number | Date) => {
  return formatDistanceToNow(new Date(rawDate), {
    addSuffix: true,
    locale: ptBR,
  })
}
