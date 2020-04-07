/*
 * @Author: 24min
 * @Date: 2020-04-06 21:57:46
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-07 21:44:48
 * @Description: 路由组件   不能这么写   该文件没有用了
 */
import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from '../views/login/login'
import Sandwiches from '../views/sandwiches/sandwiches'
import Home from '../views/home/home'
import Homefirst from '../views/homeFirst/homeFirst'

const routes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/home",
        component: Home,
        routes: [
            {
                path: '/home/first',
                component: Homefirst
            },
            {
                path: "/home/sandwiches",
                component: Sandwiches
            },
        ]
    }
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
           exact
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
                <Redirect from="/" to="/login" />
            </Switch>
        )
    }
}

export default RouterView