import {Skeleton} from "antd";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (<div className={'p-20'}><Skeleton loading={true}/><Skeleton loading={true}/><Skeleton loading={true}/><Skeleton loading={true}/></div>)
}