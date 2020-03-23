import React from 'react'

import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div>
            This is the index page
            <Link to='/search'>
                <Button>
                    Search
                </Button>
            </Link>

        </div>
    )
}

export default Index