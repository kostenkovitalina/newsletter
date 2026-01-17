export const newsService = {
    saveNews: async (articleId: string) => {
        const res = await fetch('/api/save-news', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ articleId }),
        })

        if (!res.ok) {
            throw new Error('Failed to save news')
        }

        return res.json()
    },

    deleteNews: async (articleId: string) => {
        const res = await fetch('/api/delete-news', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ articleId }),
        })

        if (!res.ok) {
            throw new Error('Failed to delete news')
        }

        return res.json()
    },
}
