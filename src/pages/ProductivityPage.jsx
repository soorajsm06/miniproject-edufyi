function GoalList() { return <div className="goal-list"><b>Increase International Revenue</b>{['Increase Sales in DKI by 12%','Complete EMEA Sales Training','Complete Pricing Strategy Revamp','Complete Pricing Strategy Revamp'].map((goal, i) => <div className="goal" key={goal + i}><span></span><small>{goal}</small><em>{['AO','CW','LV','SP'][i]}</em></div>)}</div> }
function Chart() { return <div className="chart"><small>Results</small><div className="legend">Performance <span>Balance</span></div><div className="bars"><i></i><i></i><i></i><i></i><i></i></div></div> }
export default function ProductivityPage() {
  return <section className="shell productivity-shell">
    <div className="productivity-intro"><span>Improve Manager Productivity</span><h1>Empowered Managers,<br/> Higher Performing Teams</h1><p>Make managing your highest point of leverage with productive<br className="desktop"/> meetings, clear expectations, and accountability.</p></div>
    <div className="feature-grid">
      <article className="okr feature-card"><GoalList /><div><h2>OKRs &amp; Goals</h2><p>Focus individuals and teams on your company’s top priorities, track progress and risks each step of the way.</p></div></article>
      <article className="analytics feature-card"><div><h2>Analytics</h2><p>Seamlessly connect performance review cycle results into compensation decisions, creating fair and equitable pay outcomes.</p></div><Chart /></article>
      <article className="grow feature-card"><div><h2>Grow</h2><p>Increase growth and engagement with HireSphere's dynamic employee development tools.</p></div><div className="employee"><div className="avatar">BH</div><b>Bethany Hale<small>People Operations</small></b><span>Career Goals</span><p>Build a strong talent organization and sustainably lead my team in order to grow the business.</p></div></article>
      <article className="turnover"><div><h2>Reduced<br/>Turnover 27%</h2><div className="donut"><b>27%</b></div><small>• Turnover</small></div></article>
    </div>
  </section>
}
