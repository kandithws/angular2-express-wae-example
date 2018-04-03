import { task } from 'gulp';
import { dest, src } from 'gulp';

import * as clean from 'gulp-clean';
import * as sourcemaps from 'gulp-sourcemaps';
import * as ts from 'gulp-typescript';


task('build', ['clean', 'incrementalBuild']);

task('incrementalBuild', () => {
  const tsProject = ts.createProject('tsconfig.json');
  const tsResult = src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return tsResult.js
    .pipe(sourcemaps.write({
      sourceRoot(file: any) {
        const level = file.relative.split('/').length;
        const sourceRoot = level === 1 ? './' : '../'.repeat(level - 1);
        return sourceRoot;
      }
    }))
    .pipe(dest('build'));
});

task('clean', () => {
  return src('build/*').pipe(clean());
});
