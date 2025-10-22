"use client";

import React, { useEffect, useState } from "react";
import teamData, { TeamMember } from "../../lib/teamData";
import resolveLocalImage from './imageMap';

const TRANSPARENT_GIF =
	"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

function groupByDepartment(members: TeamMember[]) {
	const map = new Map<string, TeamMember[]>();
	for (const m of members) {
		const key = m.Department || "Team";
		if (!map.has(key)) map.set(key, []);
		map.get(key)!.push(m);
	}
	return map;
}

export default function TeamSection() {
	const grouped = groupByDepartment(teamData);

	// resolvedImages maps the filename (e.g. 'anusha_anchlia.png') to a resolved URL
	const [resolvedImages, setResolvedImages] = useState<Record<string, string>>({});

	useEffect(() => {
		let mounted = true;
		async function loadAll() {
			for (const m of teamData) {
				const key = m.image;
				// Skip if already loaded
				if (resolvedImages[key]) continue;
				// Try static resolver first (handles casing/format differences)
				const resolved = resolveLocalImage(key);
				if (resolved) {
					if (mounted) setResolvedImages((s) => ({ ...s, [key]: resolved }));
					continue;
				}
				try {
					// dynamic import from the same folder as this component (fallback)
					const mod: any = await import(`./${key}`);
					const url = mod?.default?.src ?? mod?.src ?? mod?.default ?? mod;
					const finalUrl = typeof url === "string" ? url : url?.src ?? url;
					if (mounted) setResolvedImages((s) => ({ ...s, [key]: finalUrl }));
				} catch (err) {
					// leave unresolved; fallback to public path when rendering
				}
			}
		}
		loadAll();
		return () => {
			mounted = false;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className="px-6 md:px-12 py-12">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Our Team</h2>

				{[...grouped.entries()].map(([dept, members], idx) => (
					<div
						key={dept}
						className="mb-8 relative md:pl-6 md:before:absolute md:before:top-0 md:before:bottom-0 md:before:left-0 md:before:w-px md:before:bg-white/5 md:before:content-['']"
					>
						<h3 className="text-lg text-sky-300 font-medium mb-4 pl-3 md:pl-0">{dept}</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
							{members.map((m) => (
								<article
									key={m.Name}
									className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
								>
									<div className="flex items-start gap-4">
										<img
											src={resolvedImages[m.image] ?? `/team/${m.image}`}
											alt={m.Name}
											onError={(e: any) => (e.currentTarget.src = TRANSPARENT_GIF)}
											className="w-20 h-20 rounded-full object-cover flex-shrink-0 border border-white/5"
										/>
										<div>
											<p className="text-base font-semibold text-white">{m.Name}</p>
											<p className="text-sm text-gray-300">{m.Department}</p>
										</div>
									</div>

									<p className="mt-3 text-sm text-gray-200 leading-relaxed">
										{m.Description.length > 160
											? `${m.Description.slice(0, 160).trim()}...`
											: m.Description}
									</p>
								</article>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
