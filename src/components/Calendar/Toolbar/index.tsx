import { NavigateAction, ToolbarProps } from 'react-big-calendar'
import * as S from './style'

type ViewType = 'month' | 'week'

const Toolbar = (props: ToolbarProps) => {
  const { date, view } = props

  const navigate = (action: NavigateAction) => {
    props.onNavigate(action)
  }

  const changeView = (viewName: ViewType) => {
    props.onView(viewName)
  }

  return (
    <S.Toolbar className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={navigate.bind(null, 'TODAY')}>
          now
        </button>
        <button type="button" onClick={navigate.bind(null, 'PREV')}>
          prev
        </button>
        <button type="button" onClick={navigate.bind(null, 'NEXT')}>
          next
        </button>
      </span>
      <span className="rbc-toolbar-label">{`${new Date(date).getFullYear()}년 ${
        new Date(date).getMonth() + 1
      }월`}</span>
      <div className="guide">
        <span className="duty">당직</span>
        <span className="vacation">연차</span>
      </div>
      <div className="rbc-btn-group">
        <button
          className={`rbc-btn rbc-btn-month ${view === 'month' ? 'rbc-active' : ''}`}
          onClick={changeView.bind(null, 'month')}
        >
          Month
        </button>
        <button
          className={`rbc-btn rbc-btn-week ${view === 'week' ? 'rbc-active' : ''}`}
          onClick={changeView.bind(null, 'week')}
        >
          Week
        </button>
      </div>
    </S.Toolbar>
  )
}

export default Toolbar
