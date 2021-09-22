import { useRouter } from 'next/router'

import SkillsPage from 'components/Pages/SkillsPage'
import SkillCardList from 'components/Cards/SkillCardList'

/* <Image src="/images/room-background.png" alt="room" width="100%" height="100%" /> */

export default function SkillsCategory() {
    const router = useRouter()
    const { category } = router.query

    return (
        <SkillsPage
            category={category || ''}
            title={`Skills ${category || ''}`}
            sections={
                [
                    {
                        name: 'SkillCardList',
                        component: SkillCardList
                    }
                ]
            }
        />
    )
}