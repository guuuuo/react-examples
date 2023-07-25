import React from "react";
import { Typography, Radio } from "antd";

const Title = Typography.Title;

export const FILTERS = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
} as const;

export type FiltersValueType = typeof FILTERS[keyof typeof FILTERS];

interface IFilterProps {
    filter: FiltersValueType
}

export default function Filter({ filter }: IFilterProps) {
    const filterTextList = Object.keys(FILTERS) as Array<keyof typeof FILTERS>;

    return (
        <div className="filters status-filters">
            <Title level={5}>Filter by status</Title>
            <Radio.Group defaultValue={filter} size="small">
                {filterTextList.map((text) => {
                    const val = FILTERS[text];
                    return (
                        <Radio.Button key={val} value={val}>
                            {text}
                        </Radio.Button>
                    );
                })}
            </Radio.Group>
        </div>
    )
}