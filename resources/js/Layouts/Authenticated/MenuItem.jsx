import { Link } from "@inertiajs/react";

export default function MenuItem({
    link,
    icon,
    text,
    isActive,
    method = "get",
}) {
    return (
        <Link
            href={link ? route(link) : null}
            className={`side-link ${isActive && "active"}`}
            method={method}
            as="button" //mengubah syntax pada bagian side bar menjadi sintax button
            >
            {icon}
            {text}
        </Link>
    );
}
