import axios from 'axios'

export const getCommentsAnalytics = async (dateFrom, dateTo) => {
  try {
    const fromDate = new Date(dateFrom)
    const toDate = new Date(dateTo)

    if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
      throw new Error('Invalid date format. Use ISO 8601 (e.g., "2024-02-16T12:00:00Z").')
    }

    if (fromDate > toDate) {
      throw new Error('dateFrom must be earlier than or equal to dateTo.')
    }

    // Выполнение запроса
    const response = await axios.get('/analytic/comments', {
      params: {
        dateFrom,
        dateTo,
      },
    })

    return response.data
  } catch (error) {
    console.error('Error fetching comments analytics:', error)
    throw error
  }
}
