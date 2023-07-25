import React from "react";
import { Input } from "antd";

interface IHeaderProps {
    placeholder?: string;
}

export default function Header(props: IHeaderProps) {
    const {placeholder = 'What needs to be done?'} = props;

    return <Input className="net-todo" placeholder={placeholder} />;
}