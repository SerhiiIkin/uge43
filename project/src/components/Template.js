"use client";

export const Template = ({title, data}) => {

    return (
        <>
            <a>
                {title}
                <div>
                    {data.map((d) => (
                        <div key={d.id}> {d.name} </div>
                    ))}
                </div>
            </a>
        </>
    );
};
