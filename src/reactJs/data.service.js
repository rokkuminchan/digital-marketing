import React from "react";
import { useParams } from "react-router-dom";
import BlogDetail from "../components/blog/pageContents/BlogDetail";
import TagsPage from "../components/blog/pageContents/TagsPage";

var JSONData = {
    blogNews: [],
    isLoaded: false,
};
export function readJsonFilesInFolder() {
    for (let index = 7; index >= 1; index--) {
        JSONData.blogNews.push(require(`../data/blog/blog_news${index}.json`));
    }
    return JSONData;
}

export function BlogDetailWrapper(props) {
    let { blogId } = useParams();
    let blogDetailData = props.data.find((x) => x.id === blogId);
    let tagsData = [];
    props.data.forEach((i) => {
        if (i.id !== blogDetailData.id) {
            for (let item of blogDetailData.tags) {
                if (i.tags.indexOf(item) !== -1) {
                    if (tagsData.indexOf(i) === -1) {
                        tagsData.push(i);
                        break;
                    }
                }
            }
        }
    });
    return <BlogDetail data={blogDetailData} otherNews={tagsData} />;
}

export function BlogTagName(props) {
    let { tagName } = useParams();
    let tag;
    let tagData = [];
    props.data.filter((item) => {
        item.tags.map((tagItem) => {
            const value = tagItem
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/ /g, "-")
                .replace(/Đ/g, "D")
                .replace(/đ/g, "d")
                .toLowerCase();
            if (value === tagName) {
                tagData.push(item);
                tag = tagItem;
            }
        });
    });

    return <TagsPage data={tagData} tags={tag} />;
}