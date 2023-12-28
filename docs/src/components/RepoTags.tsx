"use client";

import octokit from "@/lib/octokit";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { FC, PropsWithChildren, useEffect } from "react";

interface RepoTagsProps {}
interface TopicProps extends PropsWithChildren {
    className?: string;
}

const fetchTags = async () => {
    // const response = await fetch(
    // 		'https://api.github.com/repos/leiloukou/pluralizer.js'
    // 	),
    // 	data = (await response.json()) as unknown;

    // return data;

    const response = await octokit.rest.repos.getAllTopics({
        owner: "leiloukou",
        repo: "pluralizer.js",
    });

    if (response.status !== 200)
        throw new Error(
            "Unexpected error while fetching topics from Github repository.",
        );

    return response.data.names;
};

const Topic: FC<TopicProps> = ({ className, children }) => {
    return (
        <div
            className={cn(
                "py-1 px-3 bg-muted text-muted-foreground text-xs w-max rounded-full whitespace-nowrap",
                className,
            )}
        >
            {children}
        </div>
    );
};

const RepoTags: FC<RepoTagsProps> = ({}) => {
    const { data: topics, isLoading } = useQuery({
        queryKey: ["repo", "tags"],
        queryFn: fetchTags,
    });

    if (!isLoading && (!topics || !topics.length)) return null;

    topics?.sort((a, b) => b.length - a.length);

    return (
        <div className="flex gap-2 overflow-x-auto">
            <div className="sr-only">Topics: </div>
            {!!topics ? (
                topics.map((topic) => <Topic key={topic}>{topic}</Topic>)
            ) : (
                <>
                    <Topic className="animate-pulse">Loading topics...</Topic>
                </>
            )}
        </div>
    );
};

export default RepoTags;
