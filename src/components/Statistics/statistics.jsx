import React from 'react'

// export const Statistics = ({id,label,percentage}) => {
//   return (
//     <div><section class="statistics">
//     <h2 class="title">Upload stats</h2>
  
//     <ul class="stat-list">
//       <li class="item">
//         <span class="label">.docx</span>
//         <span class="percentage">4%</span>
//       </li>
//       <li class="item">
//         <span class="label">.mp3</span>
//         <span class="percentage">14%</span>
//       </li>
//       <li class="item">
//         <span class="label">.pdf</span>
//         <span class="percentage">41%</span>
//       </li>
//       <li class="item">
//         <span class="label">.mp4</span>
//         <span class="percentage">12%</span>
//       </li>
//     </ul>
//   </section></div>
//   )
// }
export const Statistics  = ({ title, stats }) => {
  return (
    <section className="Statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;