interface BreadcrumbProps {
    currentPage: string;
}

const Breadcrumb = ({ currentPage }: BreadcrumbProps) => {
    return (
        <div className="text-sm text-gray-500 flex items-center gap-2">
            <span className="text-gray-400">Pages</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">{currentPage}</span>
        </div>
    );
};

export default Breadcrumb;
