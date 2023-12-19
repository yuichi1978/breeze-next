import axios from 'axios'

export default async (req, res) => {
    const { searchQuery } = req.query
    console.log(searchQuery)

    if (!searchQuery) {
        return res.status(400).json({ message: '検索文字がありません' })
    }

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?api_key=${
                process.env.TMDB_API_KEY
            }&query=${encodeURIComponent(searchQuery)}&language=ja-JP`,
        )
        console.log(response.data.results);

        const responseData = response.data

        return res.status(200).json(responseData)
    } catch (err) {
        console.log('エラー内容は...', err)

        if (err.response) {
            return res
                .status(err.response.status)
                .json({ message: err.response.data.message })
        } else if (err.request) {
            return res
                .status(500)
                .json({ message: 'サーバーからの応答がありません' })
        } else {
            return res
                .status(500)
                .json({ message: 'サーバー側でエラーが発生しました' })
        }
    }
}
