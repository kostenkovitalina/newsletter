import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const category = req.nextUrl.searchParams.get('category') || '';
    const query = req.nextUrl.searchParams.get('query') || '';
    const sortBy = req.nextUrl.searchParams.get('sortBy') || '';
    const page = req.nextUrl.searchParams.get('page') || '1';

    const NEWS_API_KEY = process.env.NEWS_API_KEY

    let url = '';

    if (query) {
        // Для пошуку
        url = `https://newsapi.org/v2/everything?q=${query}${sortBy ? `&sortBy=${sortBy}` : ''}&page=${page}&pageSize=20&apiKey=${NEWS_API_KEY}`;
    } else if (category) {
        // Для категорій
        url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=20&apiKey=${NEWS_API_KEY}`;
    } else {
        // За замовчуванням
        url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=20&apiKey=${NEWS_API_KEY}`;
    }

    try {
        const res = await fetch(url);

        if (!res.ok) {
            return NextResponse.json({ message: 'Error fetching news' }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
    }
}
