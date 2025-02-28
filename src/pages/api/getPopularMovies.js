import axios from 'axios'

export default async function handler(req, res) {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ja-JP`,
        )
        res.status(200).json(response.data)
        console.log('取得した結果は...', response.data)
    } catch (err) {
        res.status(500).json({ message: 'エラーが発生しました' })
        console.log(err)
    }
}
