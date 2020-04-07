/*
 * @Author: 24min
 * @Date: 2020-04-06 21:57:46
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-07 19:01:07
 * @Description: 路由组件
 */
import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from '../views/login/login'
import Sandwiches from '../views/sandwiches/sandwiches'
const routes = [
    {
        path: "/login",
        component: Login
    },
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
                {/* <IndexRoute component={Login}/> */}
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
                <Redirect from="/" to="/login" />
            </Switch>
        )
    }
}

export default RouterView