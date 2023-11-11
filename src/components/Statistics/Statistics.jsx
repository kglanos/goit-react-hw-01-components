import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export function Statistics ({ stats, title}) {
    return (
        <section className={css.stats}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.list}>
                {stats.map(item => {
                    return (
                        <li className={css.listItem} key={item.id}>
                            <span className=''>{item.label} </span>
                            <span className=''>{item.percentage}%</span>
                        </li>
                    )
                })}

            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
    title: PropTypes.string,
};