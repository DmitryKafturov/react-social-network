import React from "react";
import clasess from './ProfileInfo.module.css'

const ProfileInfo = () => {
    const person = [
        { value: 'Date of Birth:22 September' },
        { value: 'City: Tver' },
        { value: 'Web Site:Kafturov.com' }
    ]
    return (
        <div className={clasess.data} >
            <div className={clasess.data__ava}></div>
            <div className={clasess.data__prof}>
                <h1 className={clasess.data__name}>Dmitry K.</h1>
                <ul className={clasess.data__list}>
                    {person.map(({ value }, index) =>
                        <li className={clasess.data__item} key={index}>{value}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo
