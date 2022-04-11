import classNames from "classnames";
import { getPages } from "./getPages";
import { LeftIcon, RightIcon } from "../../assets/icons/Arrow";
import style from "./style.module.css";

type Props = {
    limit: number;
    size: number;
    page: number;
    getPage: (page: number) => void;
};

export default function Pagination(props: Props) {
    const pages = getPages(props.size, props.limit);

    if (pages.length === 0) return null;

    return (
        <div className={style.container}>
            <div className={style.pagination}>
                <button
                    onClick={() => props.getPage(props.page - 1)}
                    disabled={props.page === 1}
                    className={classNames(style.icon, style.left)}
                >
                    <LeftIcon />
                </button>

                {pages.map((item) => (
                    <button
                        key={item}
                        onClick={() => props.getPage(item)}
                        className={classNames(style.page, {
                            [style.active_page]: props.page === item,
                        })}
                    >
                        {item}
                    </button>
                ))}

                <button
                    onClick={() => props.getPage(props.page + 1)}
                    disabled={props.page === pages.length}
                    className={classNames(style.icon, style.right)}
                >
                    <RightIcon />
                </button>
            </div>
        </div>
    );
}