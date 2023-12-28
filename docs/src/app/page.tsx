import RepoTags from "@/components/RepoTags";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Balancer from "react-wrap-balancer";

export default function Home() {
    return (
        <div className="grid h-screen place-items-center">
            <Card className="max-w-[24rem]">
                <CardHeader className="space-y-3">
                    {/* <div> */}
                    <div className="flex gap-2 items-center">
                        <div className="w-5 bg-primary aspect-square rounded-full" />{" "}
                        <CardTitle>Pluralizer.js</CardTitle>
                    </div>
                    <CardDescription>
                        <Balancer>
                            Pluralizer.js is a simple type-safe lightweight
                            zero-dependency Javascript and Typescript library
                            for pluralizing strings.
                        </Balancer>
                    </CardDescription>
                    {/* </div> */}
                    <RepoTags />
                </CardHeader>
                <CardContent>
                    <p className="max-w-prose text-card-foreground">
                        <Balancer>My cat's name is Beluga.</Balancer>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
