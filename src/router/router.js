/*
 * @Author: 24min
 * @Date: 2020-04-06 21:57:46
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-06 22:18:53
 * @Description: 路由组件
 */
import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
const routes = [
    {
        path: "/sandwiches",
        component: Sandwiches
    },
    // {
    //     path: "/tacos",
    //     component: Tacos,
    //     routes: [
    //         {
    //             path: "/tacos/bus",
    //             component: Bus
    //         },
    //         {
    //             path: "/tacos/cart",
    //             component: Cart
    //         }
    //     ]
    // }
];
function Sandwiches() {
    return <h2>Sandwiches</h2>;
  }

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}
class RouterView extends React.PureComponent {
    render() {
        return (
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        )
    }
}

export default RouterView