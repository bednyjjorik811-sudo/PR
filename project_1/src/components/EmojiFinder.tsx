import { useEffect, useState, type ChangeEvent } from 'react'
import { getEmojis, type IEmojiItem } from '../api/emojiApi'
import './EmojiFinder.css'

const SEARCH_PLACEHOLDER = 'Введите название или ключевое слово...'
const LOADING_TEXT = 'Загрузка эмодзи...'
const EMPTY_TEXT = 'Эмодзи не найдены'
const ERROR_TEXT =
  'Не удалось загрузить данные. Проверьте, запущен ли сервер (start.bat).'

function EmojiFinder() {
  const [emojis, setEmojis] = useState<IEmojiItem[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Игнорируем ответ, если за время запроса текст поиска уже изменился
    let ignore = false

    getEmojis(searchTerm)
      .then((data) => {
        if (!ignore) setEmojis(data)
      })
      .catch(() => {
        if (!ignore) {
          setEmojis([])
          setError(ERROR_TEXT)
        }
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [searchTerm])

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setLoading(true)
    setError(null)
  }

  return (
    <main className="main">
      <input
        className="search"
        type="text"
        placeholder={SEARCH_PLACEHOLDER}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {loading && <p className="status">{LOADING_TEXT}</p>}
      {error && <p className="status status-error">{error}</p>}
      {!loading && !error && emojis.length === 0 && (
        <p className="status">{EMPTY_TEXT}</p>
      )}
      <ul className="cards">
        {emojis.map((item) => (
          <li className="card" key={item.title}>
            <span className="card-emoji">{item.emoji}</span>
            <h2 className="card-title">{item.title}</h2>
            <p className="card-description">{item.keywords}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default EmojiFinder
