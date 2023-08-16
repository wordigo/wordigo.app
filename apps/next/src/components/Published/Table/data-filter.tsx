import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@wordigo/ui'
import React from 'react'

export default function Filter() {
    return (
        <>
            <div className="ml-3 grid">
                <Label htmlFor="category">Category</Label>
                <Select>
                    <SelectTrigger id="category" className="w-48 px-3 py-2 text-muted-foreground h-10 mt-1.5">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem className="text-left" value="item1">
                            Meeting
                        </SelectItem>
                        <SelectItem className="text-left" value="item2">
                            Cooking
                        </SelectItem>
                        <SelectItem className="text-left" value="item3">
                            Sports
                        </SelectItem>
                        <SelectItem className="text-left" value="item4">
                            Business
                        </SelectItem>
                        <SelectItem className="text-left" value="item5">
                            Travel
                        </SelectItem>
                        <SelectItem className="text-left" value="item6">
                            Technology
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="ml-3 grid">
                <Label htmlFor="level">Level</Label>
                <Select>
                    <SelectTrigger id="level" className="w-48 px-3 py-2 text-muted-foreground h-10 mt-1.5">
                        <SelectValue placeholder="Level" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem className="text-left" value="a1">
                            A1 Level
                        </SelectItem>
                        <SelectItem className="text-left" value="a2">
                            A2 Level
                        </SelectItem>
                        <SelectItem className="text-left" value="b1">
                            B1 Level
                        </SelectItem>
                        <SelectItem className="text-left" value="b2">
                            B2 Level
                        </SelectItem>
                        <SelectItem className="text-left" value="c1">
                            C1 Level
                        </SelectItem>
                        <SelectItem className="text-left" value="c2">
                            C2 Level
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}
