import Tag from '../components/Tag'

function AccountVisual() {
  return <div className="account-visual">
    <div className="building"><span className="window"></span><span className="window small"></span></div>
    <div className="bank-pill dark"><b>✣</b></div><div className="bank-pill pale"><b>✦</b></div>
    <div className="account-panel"><small>All Accounts <span>⌃</span></small><strong>$ 254,783.37</strong><div><small>Checking</small><b>$ 34,764.42</b></div><div><small>Savings</small><b>$ 34,764.42</b></div></div>
  </div>
}

function BalanceCard() { return <div className="balance-card"><small>Card Balance</small><div className="pips"><i></i><i></i><i></i><i></i><i className="fade"></i><i className="fade"></i></div><div><b>$ 7,880</b><b>$ 3,430</b></div><small>Spent <span>Remaining</span></small></div> }

export default function BankingPage() {
  return <section className="shell banking-shell">
    <div className="banking-intro"><h1>Manage all spend and cash with Apro</h1><p>The powerful business banking platform backed by an award-winning<br className="desktop"/> customer support team.</p></div>
    <div className="banking-grid">
      <article className="checking"><AccountVisual /><Tag tone="blue">Send money</Tag><h2>Business Checking Accounts</h2><p>Manage your operating cash without annoying ACH fees and enjoy 24/7 customer support.</p></article>
      <div className="banking-side">
        <article className="credit"><div className="credit-art"><div className="oval dark"><b>△</b><b>△</b></div><div className="oval light">✣</div></div><BalanceCard /><div className="credit-copy"><Tag>Control Spend</Tag><h2>Business Credit Cards</h2><p>Stop non-compliant spend in real time and automate your expense accounting.</p></div></article>
        <article className="treasury"><div><div className="treasury-art">✣</div><div className="treasury-balance"><small>Card Balance</small><b>$ 254,783.37</b></div></div><div><Tag tone="green">Earn yield</Tag><h2>Apro Treasury</h2><p>Earn up to 5.30%* yield on your cash with Apro Treasury.</p></div></article>
      </div>
    </div>
  </section>
}
