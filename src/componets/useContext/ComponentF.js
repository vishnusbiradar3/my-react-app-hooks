import React from 'react'
import { UserContext,ChannelContext } from '../../App'

export default function ComponentF() {
    return (
        <div>

            <UserContext.Consumer>
                {
                    user => {
                        return (<ChannelContext.Consumer>
                            { channel=>{
                                return(
                                    <div>User Context value {user}  Company name {channel}</div>
                                ) 
                            }
                            }
                               

                        </ChannelContext.Consumer>)
                    }
                }
            </UserContext.Consumer>

        </div>
    )
}
